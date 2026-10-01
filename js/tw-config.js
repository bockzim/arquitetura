/* Configuração do Tailwind. Os valores vêm dos tokens em css/styles.css (:root),
   então cores, espaçamentos e tempos são definidos em um só lugar. */
const TW={
  content:["./index.html","./js/**/*.js"],
  theme:{
    screens:{md:"900px"},               /* único breakpoint, definido pelo conteúdo */
    extend:{
      colors:{bg:"var(--bg)",ink:"var(--ink)",mute:"var(--mute)",line:"var(--line)",stone:"var(--stone)",accent:"var(--accent)"},
      fontFamily:{serif:["Newsreader","Georgia","serif"],sans:['"Instrument Sans"',"system-ui","sans-serif"]},
      spacing:{s1:"var(--s1)",s2:"var(--s2)",s3:"var(--s3)",s4:"var(--s4)",s5:"var(--s5)",s6:"var(--s6)",s7:"var(--s7)",pad:"var(--pad)"},
      transitionDuration:{fast:"var(--fast)",norm:"var(--norm)",slow:"var(--slow)"},
      transitionTimingFunction:{quiet:"var(--ease)"}
    }
  }
};
if(typeof module!=="undefined")module.exports=TW;else tailwind.config=TW;
