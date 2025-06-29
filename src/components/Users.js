import React, {useEffect, useState} from 'react';

function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json()) //json olarak pars etmliyiz. Unutma
            .then((data) => setUsers(data)) //Çıktısını al
            //yani bu 2 Then i veri isterken kullanmalıyız.
            .finally( () => setLoading(false));
    }, []);
  return (
    <div>
        <h2>Users</h2>

        {
            loading && <div>Yükleniyor.</div>
        }

        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
                ))}
        </ul>
    </div>
  );
}

export default Users