export const getAllCourses = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_COURSE_TABLE}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    debugger;
    const a = await GetCourseAndTopicsByCourseId("web-dev");
    return data.records.map((record) => record.fields);
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getTopicsByCourseId = async (courseId) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_TOPIC_TABLE}?filterByFormula=FIND("${courseId}", {Courses})`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    const topics = data.records.map((record) => record.fields);
    return topics;
  } catch (e) {
    console.log(e);
    return { course: null, topics: [] };
  }
};

export const GetCourseAndTopicsByCourseId = async (
  courseId,
  fetchTopics = true
) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_COURSE_TABLE}?filterByFormula={id}="${courseId}"`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error fetching course: ${response.statusText}`);
    }

    const data = await response.json();
    const course = data.records.length > 0 ? data.records[0].fields : null;

    if (!course) {
      return null;
    }

    if (!fetchTopics) return { course: course };

    const topics = await getTopicsByCourseId(courseId);

    return {
      course: course,
      topics: topics.length > 0 ? topics : [],
    };
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getPagesByCourseId = async (courseId) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_PAGE_TABLE}?filterByFormula=FIND("${courseId}", {Courses})`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.records.map((record) => record.fields);
  } catch (e) {
    console.log(e);
    return [];
  }
};

export const getSectionsByPageId = async (pageId) => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/${process.env.REACT_APP_SECTION_TABLE}?filterByFormula=FIND("${pageId}", {Pages})`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_TOKEN}`,
        },
      }
    );
    const data = await response.json();
    return data.records.map((record) => record.fields);
  } catch (e) {
    console.log(e);
    return [];
  }
};

// STRUCTURE OF COURSES:
// Courses table will have courses as rows. Each course will have multiple topics and multiple pages.
// Each page will have multiple sections. For each section, there would be an identifier and parameters (all columns of section table)
// To add new type of component, add new identifier type in air table and check if all columns satisfy the params of the new component. If not, add rest as new columns.
// Component will only try to use the parameters it require so, adding a course will need it to be sure that the required fields are added
// In education page or courses main page, getAllCourses will be called to show course card.
// When course is opened, there are two approaches:

// 1. Url to /course/{id} will be opened. GetCourseAndTopicsByCourseId will be used to fetch course and topics
// If null returned, no course present. We show data of course page. If start learning is pressed, we go to /course/{id}/{firstPage} page. The pages will be fetched by getPagesByCourseId beforehand.
// On /course/{id}/{page}, course and pages will be fetched first course by GetCourseAndTopicsByCourseId with topics false so we get only course. Then it is validated that course exist, we fetch pages and check if page exists in it.
// If exists, we fetch sections of that page by getSectionsByPageId and also save pages to navigate to and fro.
// Pros: Can share links to particular course page, start from their or bookmark, better SEOs
// Cons: A bit complex, page id need to be url friendly just like course id

// 2. Url to /course/{id}/learn will be opened. All course pages will fetched and first will be selected by default. Sections will be fetched and displayed according to selected page.
// Pros: Less complex
// Cons: Can't share links to particular course page or start from their or bookmark. Less better SEOs

// On fetch of sections, its pretty simple react. We check through which category each section belongs and pass params in particular component

// STRUCTURE OF BLOGS:
// Blogs will be single page entities. They might share the sections table with course or create a separate section table if too many changes are there.
// Link to blog will be simple: /blog/{id}

// Note: id mentioned is field "id" not the original "id" of row
