import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { API_BASE } from "../config/api";

import TemplateA from "../components/micro/templates/TemplateA";
import TemplateB from "../components/micro/templates/TemplateB";
import PageFailed from "../components/micro/PageFailed";

export default function PreviewLink() {
  const { id } = useParams();

  const { data, loading, error, refetch } = useQuery("getLink", async () => {
    const response = await API_BASE.get(`/view/${id}`);
    return response;
  });

  const { data: getDataLink, loading: loadingGetLink } = useQuery(
    "getLinkData",
    async () => {
      const response = await API_BASE.get(`/detail/${id}`);
      return response;
    }
  );

  const link = getDataLink?.data?.data?.link;
  console.log(link);
  const template = link?.template;

  console.log("template", template);

  return (
    <div>
      {template == "A1" ? (
        <TemplateA link={link} />
      ) : template == "B1" ? (
        <TemplateB link={link} />
      ) : template == "C1" ? (
        <div>c1</div>
      ) : (
        <PageFailed />
      )}
    </div>
  );
}
