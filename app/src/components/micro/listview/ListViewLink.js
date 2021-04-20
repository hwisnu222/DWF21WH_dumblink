import React from "react";

export default function ListViewLink({ links }) {
  return (
    <div>
      {links.map((item) => (
        <div
          className="mb-2 mb-md-4 bg-dark d-flex align-items-center py-1 list-preview "
          onClick={() => {
            window.location = item.url;
          }}
        >
          <p className="text-center w-100 text-white my-auto py-2">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
}
