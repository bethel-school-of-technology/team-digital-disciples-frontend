export class PrayerRequest {
    requestId: number;
    userId: number;
    prayerAsk: string;
    dateTime: Date;
    isAnswered: boolean;
    isRespondedTo:  boolean;
}