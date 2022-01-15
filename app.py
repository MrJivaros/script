from pytube import YouTube
lien = 'https://youtu.be/XPSSgAPjTb4'
video = YouTube(lien)
streams = video.streams.filter(progressive=True, file_extension='mp4', resolution='1080p').order_by('resolution').desc()
streams.first().download()

