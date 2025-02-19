export default async function Page(props) {
  const { title } = await props.params; 

  return (
    <div>
      <div>This Dynamic Page: {title}</div>
    </div>
  );
}
