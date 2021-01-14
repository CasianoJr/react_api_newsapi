import { useEffect, useMemo, useState } from "react";
import { useNews } from "../news/NewsProvider";
import { apiKey } from "./newsOptions";
import { axiosNews } from "./newsApi";
import axios from "axios";

export default function Prefetch() {
  const { ACTION, state, dispatch } = useNews();
  const [apiIndex, setApiIndex] = useState(1);

  const {
    country,
    category,
    source,
    query,
    pageSize,
    topHeadlineNews: news,
  } = state;

  const fetchParameters = useMemo(() => {
    return {
      apiKey: apiKey[apiIndex],
      country,
      category,
      sources: source,
      q: query,
      pageSize,
    };
  }, [country, category, source, query, pageSize, apiIndex]);

  useEffect(() => {
    const cancelToken = axios.CancelToken.source();
    dispatch({ type: ACTION.FETCH_HEADLINES });
    console.log("fetchinging data");
    const fetchData = async () => {
      try {
        const response = await axiosNews.get("top-headlines/", {
          params: fetchParameters,
        });
        dispatch({ type: ACTION.SET_HEADLINES, payload: response.data });
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log(error.message);
        } else {
          console.log("Error occured:", error);
        }
      }
    };
    fetchData();
    return () => {
      cancelToken.cancel("Cancel due to traffic");
    };
  }, [ACTION, dispatch, fetchParameters]);

  if (parseInt(news.code) === 429) {
    setApiIndex((apiIndex) => apiIndex + 1);
    console.log("Using different key");
  }
  return <></>;
}
