
import { transformSync } from "@babel/core";
import { types as t } from "@babel/core"

function ts1() {
  return {
      name: "make-function-async",
      visitor: {
          CallExpression(path) {
            if (!path.parentPath.isAwaitExpression()) {
              path.replaceWith(
                t.awaitExpression(path.node)
              )
            }
          },
          FunctionDeclaration: {
              enter(path) {
                  if (path.node.async) return;
                  path.node.async = true;                
              }
          },
          ArrowFunctionExpression: {
            enter(path) {
                if (path.node.async) return;
                path.node.async = true;                
            }
          },
          FunctionExpression: {
            enter(path) {
                if (path.node.async) return;
                path.node.async = true;                
            }
          },
      }
  }
}

export function asyncify(userEnteredCode) {
  return transformSync(userEnteredCode, { plugins: [ ts1 ] }).code
}

