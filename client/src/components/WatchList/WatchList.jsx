import WatchListStock from "./WatchlistStock";

export const WatchList = (watchlist, userId, linkfunc) => {
  return (
    <>
      <div id="watchlist-div">
        <h1 className="watchlist-title">Stocks</h1>
        <ul id="watchlist">
          {watchlist.watchlist.tickers.slice(0, 9).map((stock) => (
            <li key={stock}>
              <WatchListStock
                stock={stock}
                userID={userId}
                linkfunc={linkfunc}
              ></WatchListStock>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
