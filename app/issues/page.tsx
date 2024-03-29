import IssueActions from "./IssueActions";
import IssueDataTable from "./IssueDataTable";

const IssuesPage = async () => {
  return (
    <div>
      <IssueActions />
      <IssueDataTable />
    </div>
  );
};

// export const dynamic = "force-dynamic";
export const revalidate = 0;

export default IssuesPage;
