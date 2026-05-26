    // Small typing effect

    const text = "Frontend Developer";
    let i = 0;

    function typing(){

      if(i < text.length){

        document.title = text.substring(0,i+1);

        i++;

        setTimeout(typing,200);

      }

    }

    typing();
