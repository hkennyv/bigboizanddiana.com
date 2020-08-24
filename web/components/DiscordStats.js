export default function DiscordStats({ data }) {
  return <pre>{data && JSON.stringify(data, null, 2)}</pre>;
}
