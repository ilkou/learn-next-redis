export default function CarForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData(event.target);

    console.log("form", form);
    const formData = Object.fromEntries(form.entries());

    console.log("formData", formData);

    const res = await fetch("/api/cars", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log("result", result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={"make"}>make</label>
      <input name={"make"} type={"text"} />
      <br />
      <label htmlFor={"model"}>model</label>
      <input name={"model"} type={"text"} />
      <br />

      <label htmlFor={"image"}>image</label>
      <input name={"image"} type={"text"} />
      <br />

      <label htmlFor={"description"}>description</label>
      <textarea name={"description"} type={"text"} />
      <br />

      <button type={"submit"}>Create car</button>
      <br />
      <br />
    </form>
  );
}
