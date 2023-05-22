import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of, take } from 'rxjs';
import { Member } from '../_models/member';
import { MembersService } from '../_services/members.service';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {
  user: User | null = null;
  constructor(private accountService: AccountService, private memberService: MembersService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: user => this.user = user
    })
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    var userName = this.user?.username.toString();
    console.log('From resolver: ', this.user?.username);
    return this.memberService.getMember(route.paramMap.get('username')!)
    //return this.memberService.getMember(userName!);
  }
}