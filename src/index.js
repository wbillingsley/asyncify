
import { parse } from "@babel/parser";
import { transformSync } from "@babel/core";
import { types as t } from "@babel/core"

function ts1() {
  return {
      name: "make-function-async",
      visitor: {
          CallExpression(path) {
            console.log(path)
            if (!path.parentPath.isAwaitExpression()) {
              path.replaceWith(
                t.awaitExpression(path.node)
              )
            }
          },
          FunctionDeclaration: {
              enter(path) {
                  if (path.node.async) return;

                  console.log(path)
                  path.node.async = true;                
              }
          },
      }
  }
}

export function asyncify(userEnteredCode) {
  return transformSync(userEnteredCode, { plugins: [ ts1 ] }).code
}

