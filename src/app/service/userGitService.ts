import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UserGitHub } from "./userGitHub";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserGitService {
  constructor(public http: HttpClient) {}

  show(name: String): Observable<UserGitHub> {
    return this.http.get("https://api.github.com/users/" + name).pipe(
      map((res: UserGitHub) => {
        return res;
      })
    );
  }
}
