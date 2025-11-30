async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try{
        const response = await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const  users = await response.json();
        dataContainer.innerHTML = '';
        const usersList = document.createElement('ul');
        users.forEach(user => {
            const ListItem = document.createElement('li');
            ListItem.textContent = `${user.name}`;
            usersList.appendChild(ListItem);
            
        });
        dataContainer.appendChild(usersList);
    }

    catch(error){
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }

}
document.addEventListener('DOMContentLoaded', fetchUserData);