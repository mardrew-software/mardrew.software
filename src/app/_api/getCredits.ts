export async function getCredits() {
    const response = await fetch(process.env.HYGRAPH_ENDPOINT as string, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        next: { revalidate: 10 },
        body: JSON.stringify({
            query: `        
            query Credits {
              credits {
                description {
                  html
                  text
                }
                endDate
                id
                image {
                  id
                  url
                  width
                  height
                }
                startDate
                title
                type
              }
            }            
            `
        })
    });
    const json = await response.json();
    if (json && json.data) {
        return json.data.credits;
    } else {
        return null;
    }
}
