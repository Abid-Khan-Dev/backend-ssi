import{j as e,B as d}from"./index-DG-IYITZ.js";function m({image:a,title:t,description:o,buttonText:s,onClick:l,variant:r}){return e.jsxs("div",{className:`outline-2 outline-gray-200 dark:outline-gray-700
        relative flex flex-col justify-center items-center p-6 rounded-3xl
        shadow-sm hover:shadow-xl dark:shadow-gray-800 transform transition-shadow duration-300
        overflow-hidden max-w-sm mx-auto h-[380px] min-h-[380px]

        ${r==="member"?"bg-white dark:bg-gray-900":"bg-gray-100 dark:bg-gray-800"}
      `,children:[a&&e.jsx("div",{className:`
            relative overflow-hidden
            ${r==="member"?"aspect-square w-32 rounded-full border-4 border-gray-200 dark:border-gray-700 mb-4":"aspect-[16/9] w-full rounded-2xl border border-gray-300 dark:border-gray-700 mb-4"}
          `,children:e.jsx("img",{src:a,alt:t,className:"w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"})}),t&&e.jsx("h4",{className:`
            ${r==="member"?"text-xl md:text-2xl font-bold":"text-lg font-semibold"} 
            text-center 
            text-gray-900 dark:text-gray-100
            mb-2
          `,children:t}),o&&e.jsx("p",{className:`
            ${r==="member"?"text-gray-700 dark:text-gray-300 text-sm md:text-base":"text-gray-600 dark:text-gray-400 text-sm"} 
            text-center mb-4 line-clamp-3 pb-1
          `,children:o}),s&&e.jsx(d,{onClick:l,children:s}),r==="member"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-tr from-blue-500 to-cyan-600 rounded-full opacity-20 blur-2xl pointer-events-none animate-pulse"}),e.jsx("div",{className:"absolute -bottom-6 -right-6 w-12 h-12 bg-gradient-to-tr from-pink-500 to-purple-600 rounded-full opacity-20 blur-xl pointer-events-none animate-[spin_15s_linear_infinite]"})]})]})}export{m as C};
