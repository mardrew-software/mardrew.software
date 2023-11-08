export async function getProject(slug: string) {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Projects {
              projects(where: {slug: "${slug}"}) {
                slug
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
                    imageOnRight
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
        return json.data.projects[0];
    } else {
        return null;
    }
}
