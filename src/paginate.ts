import _ from "lodash";
import { CarDetail } from "./App";

interface Props {
  items: CarDetail[];
  maxItemsInPage: number;
  activePage: number;
}

function paginate({ items, maxItemsInPage, activePage }: Props) {
  const startIndex = activePage * maxItemsInPage;

  const paginatedItems = _(items)
    .slice(startIndex)
    .take(maxItemsInPage)
    .value();

  return paginatedItems;
}

export default paginate;
