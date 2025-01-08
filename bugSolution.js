```javascript
// pages/about.js

export async function getServerSideProps() {
  try {
    const res = await fetch('https://api.example.com/data');
    const data = await res.json();
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true,
    };
  }
}

export default function About({ data }) {
  return (
    <div>
      <h1>About Page</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Failed to load data.</p>
      )}
    </div>
  );
}
```