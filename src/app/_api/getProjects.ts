export async function getProjects() {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Projects {
              projects {
                date
                id
                image {
                  id
                  url
                  height
                  width
                }
                title
                techstack
                steps {
                  ... on ProjectStep {
                    id
                    image {
                      id
                      height
                      width
                      url
                    }
                    title
                    description {
                      html
                      text
                    }
                  }
                }
                description {
                  html
                  text
                }
              }
            }
            `
        })
    });
    const json = await response.json();
    if (json && json.data) {
        return json.data.projects;
    } else {
        return null;
    }
}
