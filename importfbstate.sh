until (node memcachier.js); do
    echo "Bot crashed with exit code $?.  Respawning..." >&2
    sleep 10
done

