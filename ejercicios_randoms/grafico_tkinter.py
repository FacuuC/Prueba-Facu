import tkinter as tk

ventana = tk.Tk()
ventana.geometry("300x300")


boton1 = tk.Button(ventana, text = "Presiona", padx = 20, pady = 20)
boton1.pack()
ventana.mainloop()