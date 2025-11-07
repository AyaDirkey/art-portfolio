export class AppLink {
    static readonly host: string = "http://localhost:8000";
    static readonly server: string = `${this.host}`;
    static readonly images: string = `${this.host}/storage`;
    static readonly artist: string = `/amer-alkhatib`;

    //awards
    static readonly get_awards: string = `${this.artist}/awards`;
    static readonly award_show: string = `${this.artist}/award-show`;
    static readonly award_search: string = `${this.artist}/award-search`;
    static readonly award_store: string = `${this.artist}/award-store`;
    static readonly award_update: string = `${this.artist}/award-update`;
    static readonly award_destroy: string = `${this.artist}/award-destroy`;
    
    //contact
    static readonly get_contacts: string = `${this.artist}/contacts`;
    static readonly contact_store: string = `${this.artist}/contact-store`;
    static readonly update_contact: string = `${this.artist}/contact-update`;

    //cv
    static readonly get_cv: string = `${this.artist}/cv`;
    static readonly cv_store: string = `${this.artist}/cv-store`;
    static readonly cv_update: string = `${this.artist}/cv-update`;

    //pictures
    static readonly get_pictures: string = `${this.artist}/pictures`;
    static readonly picture_show: string = `${this.artist}/picture-show`;
    static readonly picture_search: string = `${this.artist}/picture-search`;
    static readonly picture_store: string = `${this.artist}/picture-store`;
    static readonly picture_update: string = `${this.artist}/picture-update`;
    static readonly picture_destroy: string = `${this.artist}/picture-destroy`;

    //auth
    static readonly login: string = `${this.artist}/login`;
    static readonly logout: string = `${this.artist}/logout`;
}
