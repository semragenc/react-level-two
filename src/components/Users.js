import React, {useEffect, useState} from 'react';
import axios from "axios";

function Users() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // axios("https://jsonplaceholder.typicode.com/users")
        //     .then((res) => {
        //         setUsers(res.data);

        //         axios(`https://jsonplaceholder.typicode.com/posts?userid=${res.data[0].id}`
        //         ).then((res) => setPosts(res.data));
        //     //json olarak pars etmliyiz. Unutma
        //     //.then((data) => setUsers(data)) //Çıktısını al
        //     //yani bu 2 Then i veri isterken kullanmalıyız.
        //     })

        //     .finally( () => setLoading(false));
        getData();
    }, []);


    const getData = async () => {
        const users = await axios("https://jsonplaceholder.typicode.com/users");
        console.log(users)
    };
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

        <h2>Posts</h2>
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
                ))}
        </ul>
    </div>
  );
}

export default Users