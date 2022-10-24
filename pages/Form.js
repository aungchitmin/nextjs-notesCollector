import { useRouter } from "next/router";
import { useRef } from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Form() {
  const router = useRouter();
  const titleInputRef = useRef();
  const linkInputRef = useRef();
  const descriptionInputRef = useRef();

  async function addDataHandler(event) {
    event.preventDefault();

    const selectType = document.getElementById("types")
    const enteredType = selectType.options[selectType.selectedIndex].value
    const enteredTitle = titleInputRef.current.value;
    const enteredLink = linkInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const noteData = {
      title: enteredTitle,
      link: enteredLink,
      type: enteredType,
      description: enteredDescription,
    };

    const response = await fetch("/api/newNote", {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    await response.json();
    router.push("/");
  }

  return (
    <div className="container mx-auto mt-2">
      <form
        className="flex flex-col items-center"
        onSubmit={addDataHandler}
      >
        <div className="flex justify-between bg-slate-300 items-center p-2 w-4/5 mb-2 shadow-md">
          <label
            htmlFor="title"
            className="text-base p-2 bg-slate-700 text-slate-200 rounded-xl"
          >
            Title
          </label>
          <input
            type="text"
            className="text-base p-2 bg-gray-100 rounded-md"
            placeholder="(required)"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>

        <div className="flex justify-between bg-slate-300 items-center p-2 w-4/5 mb-2 shadow-md">
          <label
            htmlFor="link"
            className="text-base p-2 bg-slate-700 text-slate-200 rounded-xl"
          >
            Link
          </label>
          <input
            type="text"
            className="text-base p-2 border-none  rounded-md"
            required
            id="link"
            placeholder="http://youtube.com"
            ref={linkInputRef}
          />
        </div>

        <div className="flex justify-between bg-slate-300 items-center p-2 w-4/5 mb-2 shadow-md">
          <label
            htmlFor="button"
            className="text-base p-2 bg-slate-700 text-slate-200 rounded-xl"
          >
            Type
          </label>
          <select
            id="types"
            name="categories"
            className="border-none p-1 pt-2 pb-2 text-sm rounded-md bg-gray-100"
          >
            <option value="2">Facebook</option>
            <option value="3">Websites</option>
            <option value="4">Youtube</option>
            <option value="5">Others</option>
          </select>
        </div>

        <div className="flex justify-between  p-2 w-4/5 bg-slate-300 items-center mb-1 shadow-md">
          <label
            className="text-base p-2  bg-slate-700 text-slate-200 rounded-xl"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            placeholder="(optional)"
            rows="5"
            ref={descriptionInputRef}
            className="text-base p-2 bg-gray-100 border-none rounded-md"
          ></textarea>
        </div>

        <button className="p-2 m-2 bg-green-700 text-slate-200  rounded-md">Add Info</button>
      </form>
    </div>
  );
}

export default Form;
