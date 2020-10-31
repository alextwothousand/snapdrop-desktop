package main

import (
	"github.com/webview/webview"
)

func main() {
	debug := false

	w := webview.New(debug)
	defer w.Destroy()

	w.SetTitle("Snapdrop Desktop")
	w.SetSize(800, 600, webview.HintNone)

	w.Navigate("https://snapdrop.net")
	w.Run()
}
