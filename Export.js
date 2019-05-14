export const lolpp = [1,2,3];

export class AnimeClass{
    constructor(title,month){
        this._title = title;
        this._month = month;
    }

    get AnimeTitle(){
        return this._title;
    }

    get AnimeMonth(){
        return this._month;
    }

    set AnimeTitle(updatetitle){
        this._title = updatetitle;
    }

    set AnimeMonth(updatemonth){
        this._month = updatemonth;
    }
}