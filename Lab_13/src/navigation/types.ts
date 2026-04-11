export type RootStackParamList = {
    HomeMain: undefined;
    SearchMain: undefined;
    NotificationMain: undefined;
    ProfileMain: { userId: string };
    Profile: { userId: string };
    Settings: undefined;
};

export type TabParamList = {
    Home: undefined;
    Search: undefined;
    Notification: undefined;
    Profile: undefined;
};

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList { }
    }
}