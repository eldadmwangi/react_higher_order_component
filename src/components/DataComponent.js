import React from "react";

// This component is just used for display, the DataContainerWithloader has the logic
const DataComponent = ({ data }) => {
  return (
    <div>
      <p>Data from Api</p>
      {data ? (
        <div>
          {data.map(post => (
            <div key={post.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
              <section>
                <h3>USER_ID</h3>
                <p>{post.userId}</p>
              </section>
              <section>
                <h3>Title</h3>
                <p>{post.title}</p>
              </section>
              <section>
                <h3>Body</h3>
                <p>{post.body}</p>
              </section>
            </div>
          ))}
        </div>
      ) : <p>no data</p>}
    </div>
  );
}

export default DataComponent;
