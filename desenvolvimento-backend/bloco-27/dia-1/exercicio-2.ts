class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(params: { from: string, to: string, subject?: string, message: string }) {
    this._from = params.from;
    this._to = params.to;
    this._message = params.message;
    this._subject = params.subject || '';
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { 
    return this._from; 
  }

  get to(): string { 
    return this._to; 
  }

  get content(): string {
    return `
      From ${this._from} to ${this._to}
      ${this._subject}

      ${this._message}
    `;
  }
}

class MailList {
  private mailList: Email[]

  constructor(mailList: Email[] = []) {
    this.mailList = mailList
  }

  get all(): Email[] { 
    return this.mailList; 
  }

  getByEmailFrom(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.from === mailAddress);
  }

  getByEmailTo(mailAddress: string): Email[] {
    return this.mailList.filter((mail) => mail.to === mailAddress);
  }

  getBySubject(searchString: string): Email[] {
    return this.mailList.filter(
      (mail) => mail.subject.indexOf(searchString) !== -1
    );
  }

  addEmail(newMail: Email): void { 
    this.mailList.push(newMail); 
  }

  removeEmail(mailToRemove: Email): void {
    this.mailList = this.mailList.filter((mail) => mail !== mailToRemove);
  }
}