import socket
import select
import sys

server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

if len(sys.argv) != 3:
    print("Please include IP address followed by port number")
    exit()

IP_ADDR = str(sys.argv[1])
PORT = int(sys.argv[2])

server.connect((IP_ADDR, PORT))

while True:
    # maintain list of possible input streams
    sock_list = [sys.stdin, server]

    for sock in sock_list:
        if sock == server:
            msg = sock.recv(2048)
            print(msg.decode('utf-8'))
        else:
            msg = sys.stdin.readline()
            server.send(msg.encode())
            sys.stdout.write("<You>")
            sys.stdout.write(msg)
            sys.stdout.flush()

server.close()