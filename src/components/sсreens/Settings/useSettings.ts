// import { API } from "api/instance";
// import { apiUrl } from "constants/base.constans";
// import { toastCustom } from "shared/toast";
// import { Notification } from "components/Notification";
// import { NotificationCustom } from "components/NotificationCustom";

// export const useSettings = (productName: string) => {
//     const disabledProduct = () => {
//         if (!productName) return;
//         API.get(`${apiUrl}?action=set_work_status&cheat=${productName}&status=0`);
//         toastCustom(<NotificationCustom text="Error reset HWID" type="error" />, 3000);
//     };
//     const freezeAllSubscriptions = () => {
//         if (!productName) return;
//         API.get(`${apiUrl}?action=freeze_all&cheat=${productName}`);
//         toastCustom(<Notification text="Error reset HWID" type="error" />, 3000);
//     };
//     const unFreezeAllSubscriptions = () => {
//         if (!productName) return;
//         API.get(`${apiUrl}?action=unfreeze_all&cheat=${productName}`);
//         toastCustom(<Notification text="Error reset HWID" type="error" />, 3000);
//     };

//     return {
//         disabledProduct,
//         freezeAllSubscriptions,
//         unFreezeAllSubscriptions,
//     };
// };
