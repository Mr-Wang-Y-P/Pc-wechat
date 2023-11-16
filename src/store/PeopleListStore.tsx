import { makeAutoObservable, runInAction } from "mobx";
import { getPeopleList } from "../utils/people";
import { DataType } from "../interface/peopleProps";
class PeopleListStore {
  peopleList: DataType[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setPeopleList = async () => {
    const res = await getPeopleList();
    runInAction(() => {
      this.peopleList = res;
    });
    return this.peopleList;
  };
}

const peopleListStore = new PeopleListStore();
export default peopleListStore;
