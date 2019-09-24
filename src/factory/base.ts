export interface Sender {
    send(): void;
}

export class MailSender implements Sender {
    public send() {
        console.log(`this is mailSender`);
    }
}

export class SmsSender implements Sender {
    public send() {
        console.log(`this is smsSender`);
    }
}