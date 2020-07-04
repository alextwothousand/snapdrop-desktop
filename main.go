package main

import "github.com/zserge/webview"

func main() {
	debug := true
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("Snapdrop Desktop")
	w.SetSize(800, 600, webview.HintNone)
	w.Navigate("https://snapdrop.net")
	w.Run()
}
