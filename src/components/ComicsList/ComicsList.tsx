import { format, parseISO } from "date-fns";
import { useEffect, useState } from "react";
import { fetchComicDetails } from "../../services/charactersApi";
import { ComicDetail, ComicsListProps } from "../../types/index";
import "./ComicsList.css";

const ComicsList = ({ data }: ComicsListProps) => {
  const [comicDetails, setComicDetails] = useState<ComicDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const formatDate = (dateString: string) => {
    return format(parseISO(dateString), "dd/MM/yyyy");
  };

  const reduceDescription = (description: string) => {
    return description.length > 200
      ? description.substring(0, 200) + "..."
      : description;
  };

  useEffect(() => {
    const fetchComicsDetails = async () => {
      setLoading(true);
      const res = data.map((comic) => fetchComicDetails(comic.resourceURI));
      const comics = await Promise.all(res);

      const flatComics = comics.flatMap((detail) => detail.results);
      setComicDetails(flatComics.slice(0, 5));
      setLoading(false);
    };

    fetchComicsDetails();
  }, [data]);

  return (
    <div className="comic-list">
      {loading && <p>Loading...</p>}
      {comicDetails.map((comic) => (
        <div key={comic.id} className="comic-item">
          <img
            src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`}
            alt={`Comic ${comic.id}`}
            className="comic-image"
          />
          <div className="comic-info">
            <h3 className="comic-title">{comic.title}</h3>
            <div className="comic-date-pages">
              <p className="comic-date">
                {formatDate(
                  comic.dates.find((date) => date.type === "onsaleDate")
                    ?.date || "N/A"
                )}
              </p>
              <span>|</span>
              <p>{comic.pageCount || "N/A"} pages</p>
            </div>
            <p className="comic-description">
              {reduceDescription(
                comic.description || "There is no description"
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComicsList;
