function showProfile(id) {
    let profile = document.getElementById(id);
    if (profile.hidden) {
       profile.hidden = false;
    } else {
       profile.hidden = true;
    }
}