export const Outils = {
    methods: {
        avatar(member) {
            if (member.email) {
                return `https://eu.ui-avatars.com/api/?name=${
        member.username
      }&rounded=true&bold=true&format=svg&background=${this.stringToColour(
        member.email
      )}`
            } else {
                let email = "visiteur@gmail.com"
                return `https://eu.ui-avatars.com/api/?name=${
            member.username
          }&rounded=true&bold=true&format=svg&background=${this.stringToColour(
            email
          )}`
            };
        },
        stringToColour(str) {
            var hash = 0;
            for (var i = 0; i < str.length; i++) {
                hash = str.charCodeAt(i) + ((hash << 5) - hash);
            }
            var colour = "";
            for (var i = 0; i < 3; i++) {
                var value = (hash >> (i * 8)) & 0xff;
                colour += ("00" + value.toString(16)).substr(-2);
            }
            return colour;
        },
    },
};