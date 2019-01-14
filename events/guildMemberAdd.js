module.exports = member => {
    let username = member.user.username;
    member.send('Sunucuya Hoş Geldin!' + username );
    member.guild.defaultChannel.send('');
};
