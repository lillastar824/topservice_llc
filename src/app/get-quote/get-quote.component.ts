import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import {NgxSpinnerService} from 'ngx-spinner';


import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { Model } from './getaquote_model';
import { NgForm } from '@angular/forms';

import * as Email from '../../assets/js/smtp';
declare let Email: any;


@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.less']
})
export class GetQuoteComponent implements OnInit {
  model: Model = new Model();
  constructor( private profile: ProfileService, private snotify: SnotifyService, private spinner: NgxSpinnerService) { }

  handleMenuOpenClick() {
    $('.menu').stop(0).fadeIn('fast');
  }
  handleMenuCloseClick() {
    $('.menu').stop(0).fadeOut('fast');
  }
  handleSelectAttachmentClick() {
    $('.select-attachment').trigger('click');
  }

  onSubmit(f: NgForm) {

    Email.send({
    Host : 'smtp.elasticemail.com',
    Username : 'marianbx824@gmail.com',
    Password : '4C477F300CFD840C12C4B5AB03CB5ACCDD2E',
    To : 'marianbx824@gmail.com',
    From : 'marianbx824@gmail.com',
    Subject : this.model.subject,
    Body : `
    <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.model.name} <br /> <b>Email: </b>${this.model.email}<br /> <b>Subject: </b>${this.model.subject}<br /> <b>Message:</b> <br /> ${this.model.message} <br><br> <b>~End of Message.~</b> `
    }).then( message => {alert(message); f.resetForm(); } );
      
  }

  ngOnInit(): void {
    const $this = this;
    window.onload = function() {
      setTimeout(() => {
        $this.spinner.hide();
      }, 1000);
    };
  }

}
