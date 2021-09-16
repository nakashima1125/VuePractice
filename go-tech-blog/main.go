package main

import (
	// 標準パッケージ
	"net/http"
	"time"

	// 外部パッケージ
	"github.com/flosch/pongo2/v4"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

const tmplPath = "src/template/"

var e = createMux()

func main() {
	// `/` というパス（URL）と `articleIndex` という処理を結びつける
	e.GET("/", articleIndex)
	// Webサーバーをポート番号 8080 で起動する
	e.Logger.Fatal(e.Start(":8080"))
}

func createMux() *echo.Echo {
	// アプリケーションインスタンスを生成
	e := echo.New()
	// アプリケーションに各種ミドルウェアを設定
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.Gzip())
 	// アプリケーションインスタンスを返却
	return e
}

func articleIndex(c echo.Context) error {

	data := map[string]interface{}{
		"Message": "Hello, World!",
		"Now":     time.Now(),
	        }
	        return render(c, "article/index.html", data)
	      }
	    
	      func htmlBlob(file string, data map[string]interface{}) ([]byte, error) {
	        return pongo2.Must(pongo2.FromCache(tmplPath + file)).ExecuteBytes(data)
	      }
	    
	      func render(c echo.Context, file string, data map[string]interface{}) error {
	        b, err := htmlBlob(file, data)
	        if err != nil {
		return c.NoContent(http.StatusInternalServerError)
	        }
	        return c.HTMLBlob(http.StatusOK, b)
}
