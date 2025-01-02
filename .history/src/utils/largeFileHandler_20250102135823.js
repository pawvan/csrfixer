/*!
 * This code is belongs to Pawvan
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */
 module.exports  = function handlerLargerFiles(config,env){
    if(env ==="production"){
        config.optimizations.splitChunks={
            chunks:'all',
            minSize: 3000,
            maxSize : 500000,
        };
        config.module.rule.push({
            test: /\.(png|jpg|jpeg|gif|svg|woff2|ttf|eot|otf|mp4)$/,
   loader:'file-loader',
   options:{
    name:'assets/[name].[hash]'
   }         
        })
    
    
    }

 }