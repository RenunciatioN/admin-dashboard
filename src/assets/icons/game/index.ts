import apex from "./apexLegends.png";
import cs2 from "./cs2.png";
import csgo from "./csgo.png";
import roqueCompany from "./rogueCompany.png";
import rust from "./rust.png";
import superPeople from "./superPeople.png";
import unturned from "./unturned.png";
import huntShowdown from "./huntShowdown.png";

export { apex, cs2, csgo, roqueCompany, rust, superPeople, unturned, huntShowdown };

interface IGameIcon {
    [key: string]: string;
}

export const gamesIcons: IGameIcon = {
    RUST: rust,
    APEX: apex,
    "CS:GO": csgo,
    CS2: cs2,
    "SUPER PEOPLE": superPeople,
    "HUNT SHOWDOWN": huntShowdown,
    UNTURNED: unturned,
    "ROQUE COMPANY": roqueCompany,
};
