function add_user(){
    player_1=document.getElementById("player1").value;
    player_2=document.getElementById("player2").value;
    
    localStorage.setItem("Player 1 Name", player_1);
    localStorage.setItem("Player 2 Name", player_2);

    window.location="game_page.html";
}


