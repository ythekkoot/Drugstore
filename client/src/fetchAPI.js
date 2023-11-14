export async function getData() {
    const response = await fetch('/api/drugStore');
    return await response.json();
}
  
  
export async function postDrug(data) {
    try {
      const response = await fetch('/api/addDrug', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      return await response.json();
    } catch(error) {
      throw error;
    }
}


export async function updateDrug(data) {
    try {
      const response = await fetch(`/api/updateDrug/${data.uuid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    return await response.json();
  
    } catch(error) {
      throw error;
    }
}