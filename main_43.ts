function make_great2(magicians :string[]): string[]{
    const greatmagicians: string[] =[];
    for (let i = 0; i <magicians.length; i++){
        greatmagicians.push(magicians[i]," the great");
    }
      return greatmagicians;
}
     const magicians3: string[] = ["shahid", "adil","zakir"];
     const greatmagicians2: string [] =  make_great2(magicians3);
     console.log(magicians3);
     console.log(greatmagicians2)
