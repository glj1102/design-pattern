import { Sender, MailSender, SmsSender } from "./base";

interface Provider {
    produce(): Sender;
}

class SendMailFactory implements Provider {
    public produce(): MailSender {
        return new MailSender();
    }
}

class SendSmsFactory implements Provider {
    public produce(): SmsSender {
        return new SmsSender();
    }
}

{
    const factory = new SendMailFactory();
    const sender = factory.produce();
    sender.send();
}