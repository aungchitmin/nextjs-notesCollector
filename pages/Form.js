import { useRouter } from "next/router";
import { useRef } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Form() {
  const router = useRouter();
  const titleInputRef = useRef();
  const linkInputRef = useRef();
  const descriptionInputRef = useRef();

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  async function addDataHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredLink = linkInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const noteData = {
      title: enteredTitle,
      link: enteredLink,
      description: enteredDescription,
    };

    const response = await fetch("/api/newNote", {
      method: "POST",
      body: JSON.stringify(noteData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
    router.push("/");
  }

  return (
    <div className="container shadow-md  mx-auto bg-red-500  ">
      <form
        className="bg-slate-500 flex flex-col items-center"
        onSubmit={addDataHandler}
      >
        <div className="flex justify-between items-center p-2 w-4/5 border-b">
          <label
            htmlFor="title"
            className="text-base p-2 bg-myowncolor rounded-xl"
          >
            Title
          </label>
          <input
            type="text"
            className="text-base p-2  rounded-md"
            required
            id="title"
            ref={titleInputRef}
          />
        </div>

        <div className="flex justify-between items-center p-2 w-4/5 border-b">
          <label
            htmlFor="link"
            className="text-base p-2 bg-myowncolor rounded-xl"
          >
            Link
          </label>
          <input
            type="text"
            className="text-base p-2  rounded-md"
            required
            id="link"
            placeholder="http://youtube.com"
            ref={linkInputRef}
          />
        </div>

        <div className="flex justify-between items-center p-2 w-4/5 border-b">
          <label
            htmlFor="button"
            className="text-base p-2 bg-myowncolor rounded-xl"
          >
            Type
          </label>
          <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
              Options
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                        "block px-4 py-2 text-sm"
                      )}
                    >
                      Account settings
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>

        </div> 

        <div className="flex justify-between  p-2 w-4/5  items-center border-b">
          <label
            className="text-base p-2  bg-myowncolor rounded-xl"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
            className="text-base p-2  rounded-md"
          ></textarea>
        </div>

        <button className="p-2 m-2 bg-red-500  rounded-md">Add Info</button>
      </form>
    </div>
  );
}

export default Form;
